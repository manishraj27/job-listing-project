from scrapy import Item, Field

class JobItem(Item):
    job_id = Field()
    title = Field()
    company_name = Field()
    location = Field()
    summary = Field()
    employment_type = Field()
    posted_date = Field()
    salary = Field()
    company_logo_url = Field()
    details_page_url = Field()
    is_remote = Field()