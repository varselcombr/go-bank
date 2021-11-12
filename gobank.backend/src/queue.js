import bull from './app/lib/bull';
import mailerJob from './app/jobs/mailerJob';

bull.process(mailerJob.handle);

bull.on('failed', (job, err) => {
  console.log('Job failed', mailerJob.key, mailerJob.data);
  console.log(err);
});
