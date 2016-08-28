const MongoClient = require('mongodb').MongoClient;

module.exports = {};

/**
 * @param  {String} dbName
 * @return {Promise<DB>}
 */
module.exports.getDatabase = function getDatabase(dbName) {
	const dbAddr = `mongodb://localhost:27017/${dbName}`;

	return new Promise((resolve, reject) => {
		MongoClient.connect(dbAddr, (err, db) => {
			return err ? reject(err) : resolve(db);
		});
	});
};

/**
 * @param  {DB} db
 * @param  {String} collectionName
 * @return {Promise<Collection>}
 */
module.exports.getCollection = function getCollection(db, collectionName) {
	return new Promise((resolve, reject) => {
		db.collection(collectionName, (err, collection) => {
			return err ? reject(err) : resolve(collection);
		});
	});
};

// ====================== CRUD =============================
/**
 * @param  {collection} collection
 * @param  {Object} record
 * @return {Promise<result>}
 */
module.exports.insert = function insert(collection, record) {
	return new Promise((resolve, reject) => {
		collection.insert(record, { w: 1 }, (err, result) => {
			return err ? reject(err) : resolve(result);
		});
	});
};

/**
 * @param  {collection} collection
 * @param  {Object} criteria
 * @return {Promise<Object>} result
 */
module.exports.find = function find(collection, criteria) {
	return new Promise((resolve, reject) => {
		collection.findOne(criteria, (err, record) => {
			return err ? reject(err) : resolve(record);
		});
	});
};


module.exports.findAll = function findAll(collection, criteria) {
	return new Promise((resolve, reject) => {
		collection.find(criteria, (err, record) => {
			return err ? reject(err) : resolve(record);
		});
	});
};

/**
 * @param  {Collection} collection
 * @param  {Object} oldRecord
 * @param  {Object} newRecord
 * @return {Promise<Object>} result
 */
module.exports.replace = function replace(collection, oldRecord, newRecord) {
	return new Promise((resolve, reject) => {
		collection.update(oldRecord, newRecord, { w: 1 }, (err, result) => {
			return err ? reject(err) : resolve(result);
		});
	});
};

/**
 * @param  {Collection} collection
 * @param  {Object} record
 * @return {Promise<Object>} result
 */
module.exports.remove = function remove(collection, record) {
	return new Promise((resolve, reject) => {
		collection.remove(record, { w: 1 }, (err, result) => {
			return err ? reject(err) : resolve(result);
		});
	});
};
