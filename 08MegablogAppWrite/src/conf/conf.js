//prod based approch to store configs
const conf = {
  appwriteUrl: String(import.meta.env.VITE_APPWRITE_URL),
  appwriteProjectId:String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
  appwriteDBId:String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
  appwriteCollectionId:String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
  appwriteBucketId:String(import.meta.env.VITE_APPWRITE_BUCKET_ID)
};
console.log(conf);
export default conf;
