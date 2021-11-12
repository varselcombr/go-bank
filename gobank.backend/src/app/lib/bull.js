import Queue from 'bull';
import redis from '../../config/redis';

import mailerJob from '../jobs/mailerJob';

const mailerQueue = new Queue(mailerJob.key, redis);

export default mailerQueue;
