export const EvtDomainEventSchemaTypeDefs = `
  type EvtDomainEventSchema {
    id: ID!
    tenantId: String!
    code: String!
    name: String!
    status: String!
    createdAt: String!
  }
  extend type Query {
    getEvtDomainEventSchema(id: ID!): EvtDomainEventSchema
    listEvtDomainEventSchemas(tenantId: String!): [EvtDomainEventSchema!]!
  }
`;

export const EvtDomainEventSchemaResolvers = {
  Query: {
    getEvtDomainEventSchema: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C-01", name: "EvtDomainEventSchema", status: "ACTIVE", createdAt: new Date().toISOString() };
    },
    listEvtDomainEventSchemas: async (_: any, args: { tenantId: string }) => {
      return [{ id: "1", tenantId: args.tenantId, code: "C-01", name: "EvtDomainEventSchema", status: "ACTIVE", createdAt: new Date().toISOString() }];
    }
  }
};
