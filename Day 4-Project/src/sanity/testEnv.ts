// File: src/sanity/testEnv.ts
import dotenv from "dotenv";
import path from "path";

// ✅ FORCE LOAD .env FILE
const envPath: string = path.resolve(__dirname, "../../.env");
console.log(`📂 Loading .env from: ${envPath}`);

dotenv.config({ path: envPath });

// ✅ CHECK ENV VARIABLES
console.log("🔍 Checking Environment Variables...");
console.log("✅ SANITY_PROJECT_ID:", process.env.SANITY_PROJECT_ID || "❌ MISSING!");
console.log("✅ SANITY_DATASET:", process.env.SANITY_DATASET || "❌ MISSING!");
console.log("✅ SANITY_AUTH_TOKEN:", process.env.SANITY_AUTH_TOKEN ? "✅ Exists" : "❌ MISSING!");
