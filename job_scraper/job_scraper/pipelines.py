import json
import requests
from itemadapter import ItemAdapter
import time

class JsonWriterPipeline:
    def __init__(self):
        self.file = None
        self.items = []

    def open_spider(self, spider):
        self.file = open('jobs.json', 'w', encoding='utf-8')

    def close_spider(self, spider):
        # Write all items at once when spider closes
        json.dump(self.items, self.file, ensure_ascii=False, indent=4)
        self.file.close()

    def process_item(self, item, spider):
        # Convert item to dict and store
        item_dict = dict(item)
        self.items.append(item_dict)
        
        # Send to Django API
        try:
            api_url = 'http://localhost:8000/api/jobs/'
            response = requests.post(api_url, json=item_dict)
            time.sleep(0.5)
            spider.logger.info(f"Sending job to API: {json.dumps(item_dict, ensure_ascii=False)}")
            
            spider.logger.info(f"API response: {response.status_code}, {response.text}")
            
            if response.status_code == 201:
                spider.logger.info(f"Successfully sent job to API: {item_dict.get('title', '')}")
            else:
                spider.logger.error(f"Failed to send job to API. Status code: {response.status_code}")
        except Exception as e:
            spider.logger.error(f"Error sending job to API: {str(e)}")
        
        return item