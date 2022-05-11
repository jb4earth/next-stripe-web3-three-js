import IPFS from 'ipfs';
import OrbitDB from 'orbit-db';
import React from "react";

//
// ;(async function () {
//   // const ipfs = await IPFS.create()
//   // const orbitdb = await OrbitDB.createInstance(ipfs)
//   //
//   // // Create / Open a database
//   // const db = await orbitdb.log("hello")
//   // await db.load()
//   //
//   // // Listen for updates from peers
//   // db.events.on("replicated", address => {
//   //   console.log(db.iterator({ limit: -1 }).collect())
//   // })
//   //
//   // // Add an entry
//   // const hash = await db.add("world")
//   // console.log(hash)
//   //
//   // // Query
//   // const result = db.iterator({ limit: -1 }).collect()
//   // console.log(JSON.stringify(result, null, 2))
//
//   // const fullAddress = '/orbitdb/zdpuAoGPB4X3Z3ko8KCdruhGaSjt16yozSxuwtdPa9LaVZm36/count'// address from console of first browser window from first run
//   //
//   // const store = await orbitdb.eventlog(fullAddress)
//   // await store.load()
//   //
//   // console.log(store)
// })()



async function Orbit() {
  const fullAddress = '/orbitdb/zdpuAoGPB4X3Z3ko8KCdruhGaSjt16yozSxuwtdPa9LaVZm36/count'// address from console of first browser window from first run
  const store = await orbitdb.eventlog(fullAddress)
  console.log(store)
  return (
    store
  );
}

export default Orbit;
