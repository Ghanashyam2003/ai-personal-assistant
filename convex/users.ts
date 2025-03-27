import { v } from "convex/values";
import { mutation } from "./_generated/server";

export const CreateUser = mutation({
  args: {
    name: v.string(),
    email: v.string(),
    picture: v.string(),
  },
  handler: async (ctx, args) => {
    // Check if user already exists in DB
    const users = await ctx.db
      .query("users")
      .filter((q) => q.eq(q.field("email"), args.email))
      .collect();

    if (!users || users.length === 0) {
      // If user does not exist, add a new one
      const newUser = {
        name: args.name,
        email: args.email,
        picture: args.picture,
        credits: 5000,
      };

      await ctx.db.insert("users", newUser);
      return newUser;
    }

    // Return existing user
    return users[0] || null;
  },
});
