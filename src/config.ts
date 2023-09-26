import path from "path";
import dotenv from "dotenv";
import * as os from "os";

var envFilePath = "../.env";

//Remove first option
if(os.hostname() == "ubuntu-desktop-maurice" || os.hostname().startsWith("vp") || os.hostname().startsWith("ps")) envFilePath = "../../.env";
// Parsing the env file.
dotenv.config({ path: path.resolve(__dirname, envFilePath) });

// Interface to load env variables
// Note these variables can possibly be undefined
// as someone could skip these varibales or not set up a .env file at all

interface ENV {
  PASSWORD: string | undefined;
}

interface Config {
  PASSWORD: string;
}

// Loading process.env as ENV interface

const getConfig = (): ENV => {
  return {
    PASSWORD: process.env.PASSWORD
  };
};

// Throwing an Error if any field was undefined we don't 
// want our app to run if it can't connect to DB and ensure 
// that these fields are accessible. If all is good return
// it as Config which just removes the undefined from our type 
// definition.

const getSanitzedConfig = (config: ENV): Config => {
  for (const [key, value] of Object.entries(config)) {
    if (value === undefined) {
      console.log(`Missing key ${key} in config.env! Please fix.`);
    }
  }
  return config as Config;
};

const config = getConfig();

const sanitizedConfig = getSanitzedConfig(config);

export default sanitizedConfig;