import boto3
import botocore
import os
import uuid

BUCKET_NAME = os.environ.get("S3_MEDIA_BUCKET")
S3_LOCATION = f"http://{BUCKET_NAME}.s3.amazonaws.com/"
ALLOWED_MEDIA_EXTENSIONS = {"png", "jpg", "jpeg", "gif", "mp2", "mp3", "mp4", "wav"}

s3 = boto3.client(
    "s3",
    aws_access_key_id=os.environ.get("S3_MEDIA_KEY"),
    aws_secret_access_key=os.environ.get("S3_MEDIA_SECRET")
)

def get_unique_media_filename(filename):
    ext = filename.rsplit(".", 1)[1].lower()
    unique_filename = uuid.uuid4().hex
    return f"{unique_filename}.{ext}"

def upload_file_to_s3(file, acl="public-read"):
    print(os.environ.get("S3_MEDIA_KEY"))
    try:
        s3.upload_fileobj(
            file,
            BUCKET_NAME,
            file.filename,
            ExtraArgs={
                "ACL": acl,
                "ContentType": file.content_type
            }
        )
    except Exception as e:
        return {"errors": str(e)}
    
    return {"url": f"{S3_LOCATION}{file.filename}"}

#def remove_file_from_s3(url)