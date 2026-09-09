export const CommTypingStateTypeDefs = `
  type CommTypingState {
    id: ID!
    tenantId: String!
    code: String!
    name: String!
    status: String!
    createdAt: String!
  }
  extend type Query {
    getCommTypingState(id: ID!): CommTypingState
    listCommTypingStates(tenantId: String!): [CommTypingState!]!
  }
`;

export const CommTypingStateResolvers = {
  Query: {
    getCommTypingState: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C-01", name: "CommTypingState", status: "ACTIVE", createdAt: new Date().toISOString() };
    },
    listCommTypingStates: async (_: any, args: { tenantId: string }) => {
      return [{ id: "1", tenantId: args.tenantId, code: "C-01", name: "CommTypingState", status: "ACTIVE", createdAt: new Date().toISOString() }];
    }
  }
};
