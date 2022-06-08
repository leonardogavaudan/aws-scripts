import {
	Bucket,
	S3Client,
	ListBucketsCommand,
	ListBucketsCommandOutput,
	ListObjectsCommand,
	ListObjectsCommandOutput,
	GetObjectCommand,
	GetObjectCommandOutput,
} from '@aws-sdk/client-s3';

const getBuckets = async (client: S3Client): Promise<ListBucketsCommandOutput> => {
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

const getObjects = async (
	client: S3Client,
	bucketName: string,
	key: string,
): Promise<GetObjectCommandOutput> => {
	return await client.send(new GetObjectCommand({ Bucket: bucketName, Key: key }));
};

const client = new S3Client({});

const s3Buckets = (await getBuckets(client))?.Buckets ?? [];
console.log('s3Buckets', s3Buckets);

const s3ObjectsMetadata = await listBucketObjects(client, s3Buckets);
console.log(
	's3ObjectsMetadata',
	s3ObjectsMetadata.Contents?.map((object) => {
		return { key: object.Key, lastModified: object.LastModified };
	}),
);

const s3Object = await getObjects(client, s3Buckets?.[0]?.Name ?? '', '');
console.log('s3Object', s3Object);
