export const CommCallRoomMutationTypeDefs = `
  input CreateCommCallRoomInput {
    tenantId: String!
    code: String!
    name: String!
  }
  extend type Mutation {
    createCommCallRoom(input: CreateCommCallRoomInput!): CommCallRoom!
    deleteCommCallRoom(id: ID!): Boolean!
  }
`;

export const CommCallRoomMutationResolvers = {
  Mutation: {
    createCommCallRoom: async (_: any, args: { input: any }) => {
      return {
        id: "com_gql_" + Math.random().toString(36).substring(2, 9),
        tenantId: args.input.tenantId,
        code: args.input.code,
        name: args.input.name,
        status: "ACTIVE",
        createdAt: new Date().toISOString()
      };
    },
    deleteCommCallRoom: async (_: any, args: { id: string }) => {
      return true;
    }
  }
};
