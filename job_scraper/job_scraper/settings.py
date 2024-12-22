BOT_NAME = 'job_scraper'

SPIDER_MODULES = ['job_scraper.spiders']
NEWSPIDER_MODULE = 'job_scraper.spiders'

USER_AGENT = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'

ROBOTSTXT_OBEY = False

ITEM_PIPELINES = {
    'job_scraper.pipelines.JsonWriterPipeline': 300,
}

DOWNLOADER_MIDDLEWARES = {
   'scrapy.downloadermiddlewares.retry.RetryMiddleware': 90,
   'scrapy.downloadermiddlewares.httpproxy.HttpProxyMiddleware': 110,
}

LOG_ENABLED = True
LOG_LEVEL = 'INFO'
TWISTED_REACTOR = "twisted.internet.asyncioreactor.AsyncioSelectorReactor"
FEED_EXPORT_ENCODING = "utf-8"