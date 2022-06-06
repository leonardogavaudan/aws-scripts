import {
	S3Client,
	ListBucketsCommand,
	ListBucketsCommandOutput,
	ListObjectsCommand,
	ListObjectsCommandOutput,
} from '@aws-sdk/client-s3';

const client = new S3Client({});

const getBuckets = async (
	client: S3Client,
): Promise<ListBucketsCommandOutput> => {
	return client.send(new ListBucketsCommand({}));
};

const getBucketObjects = async (
	client: S3Client,
): Promise<ListObjectsCommandOutput> => {
	return client.send(
		new ListObjectsCommand({
			Bucket: s3Buckets?.Buckets?.[0]?.Name,
		}),
	);
};

const s3Buckets = await getBuckets(client);
const s3BucketObjects = await getBucketObjects(client);

console.log(s3BucketObjects);
