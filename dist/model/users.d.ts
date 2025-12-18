import mongoose from "mongoose";
export declare const userModel: mongoose.Model<{
    email: string;
    dateOfBirth: string;
    password: string;
    gender: string;
    firstName: string;
    lastName: string;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    email: string;
    dateOfBirth: string;
    password: string;
    gender: string;
    firstName: string;
    lastName: string;
}, {}, mongoose.DefaultSchemaOptions> & {
    email: string;
    dateOfBirth: string;
    password: string;
    gender: string;
    firstName: string;
    lastName: string;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    email: string;
    dateOfBirth: string;
    password: string;
    gender: string;
    firstName: string;
    lastName: string;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    email: string;
    dateOfBirth: string;
    password: string;
    gender: string;
    firstName: string;
    lastName: string;
}>, {}, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & mongoose.FlatRecord<{
    email: string;
    dateOfBirth: string;
    password: string;
    gender: string;
    firstName: string;
    lastName: string;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>>;
//# sourceMappingURL=users.d.ts.map