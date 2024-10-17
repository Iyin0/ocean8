import { defineSchema, defineTable } from 'convex/server'
import { v } from 'convex/values'

export default defineSchema({
	users: defineTable({
		first_name: v.optional(v.string()),
		last_name: v.optional(v.string()),
		email: v.string(),
		image_url: v.optional(v.string()),
		clerk_user_id: v.string(),
	}).index('by_clerk_user_id', ['clerk_user_id']),
	tasks: defineTable({
		title: v.string(),
		description: v.string(),
		due_date: v.optional(v.string()),
		status: v.union(
			v.literal('todo'),
			v.literal('in_progress'),
			v.literal('done')
		),
		user_id: v.id('users'),
	}),
})
