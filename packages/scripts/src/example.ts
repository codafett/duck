import { Resource } from "sst";
import { Example } from "@duck/core/example";

console.log(`${Example.hello()} Linked to ${Resource.MyBucket.name}.`);
