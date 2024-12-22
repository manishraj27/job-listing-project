import scrapy
import json
from ..items import JobItem

class DiceSpider(scrapy.Spider):
    name = 'dice_jobs'
    
    def start_requests(self):
        headers = {
            'x-api-key': '1YAt0R9wBg4WfsF9VB2778F5CHLAPMVW3WAZcKd8',
        }
        
        params = {
            'q': 'Software',
            'countryCode2': 'US',
            'radius': '30',
            'radiusUnit': 'mi',
            'pageSize': '20',
            'filters.workplaceTypes': 'Remote',
            'filters.employmentType': 'CONTRACTS',
            'filters.postedDate': 'ONE',
            'currencyCode': 'USD',
            'fields': 'id|jobId|guid|summary|title|postedDate|modifiedDate|jobLocation.displayName|detailsPageUrl|salary|clientBrandId|companyPageUrl|companyLogoUrl|companyName|employmentType|isRemote',
            'culture': 'en',
        }
        
        for page in range(1, 6):
            current_params = params.copy()
            current_params['page'] = str(page)
            url = 'https://job-search-api.svc.dhigroupinc.com/v1/dice/jobs/search'
            self.logger.info(f"Requesting page {page} with URL: {url} and params: {current_params}")
            yield scrapy.Request(
                url=url,
                headers=headers,
                method='GET',
                meta={'params': current_params},
                callback=self.parse,
                dont_filter=True
            )

    def parse(self, response):
        try:
            data = json.loads(response.body)
            
            for job in data.get('data', []):
                job_item = JobItem(
                    job_id=job.get('id'),
                    title=job.get('title'),
                    company_name=job.get('companyName'),
                    location=job.get('jobLocation', {}).get('displayName', ''),
                    summary=job.get('summary', ''),
                    employment_type=job.get('employmentType', ''),
                    posted_date=job.get('postedDate'),
                    salary=job.get('salary'),
                    company_logo_url=job.get('companyLogoUrl'),
                    details_page_url=job.get('detailsPageUrl'),
                    is_remote=job.get('isRemote', False)
                )
                yield job_item
                
        except json.JSONDecodeError as e:
            self.logger.error(f"JSON decoding error: {str(e)}. Response body: {response.body[:200]}")
        except Exception as e:
            self.logger.error(f"Error processing response: {str(e)}")