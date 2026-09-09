export const TenancyEventGqlTypeDefs = `
  type TenancyEvent {
    id: ID!
    tenantId: String!
    code: String!
    name: String!
    status: String!
    version: Int!
    createdAt: String!
    updatedAt: String!
  }

  extend type Query {
    getTenancyEvent(id: ID!): TenancyEvent
    listTenancyEvents(tenantId: String!, limit: Int): [TenancyEvent!]!
  }

  extend type Mutation {
    createTenancyEvent(tenantId: String!, code: String!, name: String!): TenancyEvent!
    deleteTenancyEvent(id: ID!): Boolean!
  }
`;

export const TenancyEventGqlResolvers = {
  Query: {
    getTenancyEvent: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "TenancyEvent", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
