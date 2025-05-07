import { pgTable, varchar, integer } from 'drizzle-orm/pg-core';

export const users = pgTable('users', {
  id: integer('id').primaryKey(),
  name: varchar('name'),
  age: integer('age'),
});
