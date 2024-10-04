
const userSchema = new Schema(
  {
    name: { type: String, required: true },
    title: { type: String, required: false },
    role: { type: String, required: false },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, required: true, default: false },
    tasks: [{ type: Schema.Types.ObjectId, ref: "Task" }],
    isActive: { type: Boolean, required: true, default: true },
  },
  { timestamps: true }
);