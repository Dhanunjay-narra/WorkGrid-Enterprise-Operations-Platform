export const IntFieldMappingSchemaTypeDefs = `
  type IntFieldMappingSchema {
    id: ID!
    tenantId: String!
    code: String!
    name: String!
    status: String!
    createdAt: String!
  }
  extend type Query {
    getIntFieldMappingSchema(id: ID!): IntFieldMappingSchema
    listIntFieldMappingSchemas(tenantId: String!): [IntFieldMappingSchema!]!
  }
`;

export const IntFieldMappingSchemaResolvers = {
  Query: {
    getIntFieldMappingSchema: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C-01", name: "IntFieldMappingSchema", status: "ACTIVE", createdAt: new Date().toISOString() };
    },
    listIntFieldMappingSchemas: async (_: any, args: { tenantId: string }) => {
      return [{ id: "1", tenantId: args.tenantId, code: "C-01", name: "IntFieldMappingSchema", status: "ACTIVE", createdAt: new Date().toISOString() }];
    }
  }
};
