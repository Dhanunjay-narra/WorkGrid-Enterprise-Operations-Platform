export const SupCannedResponseTypeDefs = `
  type SupCannedResponse {
    id: ID!
    tenantId: String!
    code: String!
    name: String!
    status: String!
    createdAt: String!
  }
  extend type Query {
    getSupCannedResponse(id: ID!): SupCannedResponse
    listSupCannedResponses(tenantId: String!): [SupCannedResponse!]!
  }
`;

export const SupCannedResponseResolvers = {
  Query: {
    getSupCannedResponse: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C-01", name: "SupCannedResponse", status: "ACTIVE", createdAt: new Date().toISOString() };
    },
    listSupCannedResponses: async (_: any, args: { tenantId: string }) => {
      return [{ id: "1", tenantId: args.tenantId, code: "C-01", name: "SupCannedResponse", status: "ACTIVE", createdAt: new Date().toISOString() }];
    }
  }
};
