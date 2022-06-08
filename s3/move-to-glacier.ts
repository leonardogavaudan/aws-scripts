import {
	Bucket,
	S3Client,
	ListBucketsCommand,
	ListBucketsCommandOutput,
	ListObjectsCommand,
	ListObjectsCommandOutput,
	GetObjectCommand,
} from '@aws-sdk/client-s3';

const client = new S3Client({});

const getBuckets = async (
	client: S3Client,
): Promise<ListBucketsCommandOutput> => {
	return client.send(new ListBucketsCommand({}));
};

const listBucketObjects = async (
	client: S3Client,
	buckets: Bucket[],
): Promise<ListObjectsCommandOutput> => {
	return client.send(
		new ListObjectsCommand({
			Bucket: s3Buckets?.[0]?.Name,
		}),
	);
};

const s3Buckets = (await getBuckets(client))?.Buckets ?? [];
const s3ObjectsMetadata = await listBucketObjects(client, s3Buckets);
const s3Object = await client.send(new GetObjectCommand({ Bucket: s3Buckets?.[0]?.Name, Key:'' }))


console.log(s3ObjectsMetadata);
