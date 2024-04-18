import boto3
import botocore
import os
import uuid

BUCKET_NAME = os.environ.get("S3_MEDIA_BUCKET")