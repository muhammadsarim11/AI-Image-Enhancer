import axios from 'axios';

const BASE_URL = 'https://techhk.aoscdn.com';
const API_KEY = 'wxtform362dtw8bqa';

export const enhancedImageApi = async (imageFile) => {
    try {
        const taskid = await uploadImage(imageFile);
        console.log("Task ID:", taskid);

        const enhancedimage = await pollEnhancedImage(taskid);
        console.log("enhanced:" + enhancedimage.image);
        return enhancedimage;
    } catch (error) {
        console.error("enhancedImageApi error:", error);
        throw error; // Let your React UI catch this and show a friendly message
    }
};


const uploadImage = async (imageFile) => {
  const formData = new FormData();
  formData.append('image_file', imageFile);

  const { data } = await axios.post(`${BASE_URL}/api/tasks/visual/scale`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
      "X-API-Key": API_KEY
    }
  });

  if (!data || !data.data?.task_id) {
    throw new Error('Invalid response from uploadImage');
  }

  console.log("Upload Response:", data.data.task_id);
  return data.data.task_id;
};

const pollEnhancedImage = async (taskId, retries = 0) => {
  const result = await getEnhancedImage(taskId);

  if (result.state === 4) { // Processing
    if (retries >= 10) {
      throw new Error('Max retries reached');
    }
    console.log("Processing, retrying...");
    await new Promise(resolve => setTimeout(resolve, 2000));
    return pollEnhancedImage(taskId, retries + 1);
  } 
    return result;
  //  else { // Failed or other state
  //   throw new Error(result.err_message || 'Image enhancement failed');
  // }
};

const getEnhancedImage = async (taskId) => {
  try {
    const response = await axios.get(`${BASE_URL}/api/tasks/visual/scale/${taskId}`, {
      headers: {
        "X-API-Key": API_KEY
      }
    });
    const data = await response.data;
    console.log(data.data.image)
    console.log("Enhanced Image Response:", response.data);
    return data.data;
  } catch (error) {
    console.error("Error fetching enhanced image:", error);
    throw error;
  }
};
