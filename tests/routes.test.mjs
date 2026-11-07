import test from 'node:test';
import assert from 'node:assert/strict';
const base=process.env.TEST_BASE_URL;
const api=(path,body,origin=base)=>fetch(`${base}/api/${path}`,{method:'POST',headers:{'Content-Type':'application/json',Origin:origin},body:JSON.stringify(body)});
test('unconfigured funding never presents fictional donations',{skip:!base},async()=>{
 const r=await fetch(`${base}/api/funding`);const b=await r.json();
 assert.equal(b.amount,null);assert.equal(b.backers,null);assert.equal(b.enabled,false);
});
test('API rejects foreign-origin form requests',{skip:!base},async()=>{
 assert.equal((await api('checkout',{},'https://foreign.invalid')).status,403);
 assert.equal((await api('contact',{},'https://foreign.invalid')).status,403);
});
test('missing keys fail closed without claiming payment or mail success',{skip:!base},async()=>{
 assert.equal((await api('checkout',{tier:'founder',consent:true,requestId:crypto.randomUUID()})).status,503);
 const r=await api('contact',{name:'MotoSIM QA',email:'qa@example.com',interest:'Engineering',message:'Local QA only; no email should be sent.',consent:true,requestId:crypto.randomUUID()});
 assert.equal(r.status,503);assert.match((await r.json()).error,/not connected/);
});
test('invalid contact data is rejected before mail integration',{skip:!base},async()=>{
 assert.equal((await api('contact',{name:'x',email:'bad',message:'short',consent:true})).status,400);
});
