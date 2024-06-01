const Dalle  = async (prompt) => {

  await fetch("https://ehristoforu-dalle-3-xl-lora-v2.hf.space/queue/join?__theme=light", {
    "headers": {
      "accept": "*/*",
      "accept-language": "en-US,en;q=0.9,fa;q=0.8",
      "content-type": "application/json",
      "priority": "u=1, i",
      "sec-ch-ua": "\"Google Chrome\";v=\"125\", \"Chromium\";v=\"125\", \"Not.A/Brand\";v=\"24\"",
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": "\"Windows\"",
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-origin",
      "cookie": "_gid=GA1.2.1829390734.1717221962; _ga_R1FN4KJKJH=GS1.1.1717221960.1.1.1717222988.0.0.0; _ga=GA1.1.1398785108.1717221960",
      "Referer": "https://ehristoforu-dalle-3-xl-lora-v2.hf.space/?__theme=light",
      "Referrer-Policy": "strict-origin-when-cross-origin"
    },
    "body": `{\"data\":[\"${prompt}\",\"(deformed, distorted, disfigured:1.3), poorly drawn, bad anatomy, wrong anatomy, extra limb, missing limb, floating limbs, (mutated hands and fingers:1.4), disconnected limbs, mutation, mutated, ugly, disgusting, blurry, amputation, (NSFW:1.25)\",true,1041095576,1024,1024,6,true],\"event_data\":null,\"fn_index\":3,\"trigger_id\":6,\"session_hash\":\"z8y48rw8o6o\"}`,
    "method": "POST"
  })
  const res = await fetch("https://ehristoforu-dalle-3-xl-lora-v2.hf.space/queue/data?session_hash=z8y48rw8o6o", {
      "headers": {
        "accept": "text/event-stream",
        "accept-language": "en-US,en;q=0.9,fa;q=0.8",
        "cache-control": "no-cache",
        "priority": "u=1, i",
        "sec-ch-ua": "\"Google Chrome\";v=\"125\", \"Chromium\";v=\"125\", \"Not.A/Brand\";v=\"24\"",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": "\"Windows\"",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
        "cookie": "_gid=GA1.2.1829390734.1717221962; _ga_R1FN4KJKJH=GS1.1.1717221960.1.1.1717222988.0.0.0; _ga=GA1.1.1398785108.1717221960",
        "Referer": "https://ehristoforu-dalle-3-xl-lora-v2.hf.space/?__theme=light",
        "Referrer-Policy": "strict-origin-when-cross-origin"
      },
      "body": null,
      "method": "GET"
    })
  const text = await res.text()
  const t = text.split("\n").map(s => s.slice(6)).filter(el => el !== '')
  const result = t.map(el => JSON.parse(el)).filter(item => item.msg === "process_completed")
  return result[0]
}

export default Dalle