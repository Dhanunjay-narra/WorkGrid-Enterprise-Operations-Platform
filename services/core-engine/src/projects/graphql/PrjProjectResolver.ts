export const PrjProjectTypeDefs = `
  type PrjProject {
    id: ID!
    tenantId: String!
    code: String!
    name: String!
    status: String!
    createdAt: String!
  }
  extend type Query {
    getPrjProject(id: ID!): PrjProject
    listPrjProjects(tenantId: String!): [PrjProject!]!
  }
`;

export const PrjProjectResolvers = {
  Query: {
    getPrjProject: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C-01", name: "PrjProject", status: "ACTIVE", createdAt: new Date().toISOString() };
    },
    listPrjProjects: async (_: any, args: { tenantId: string }) => {
      return [{ id: "1", tenantId: args.tenantId, code: "C-01", name: "PrjProject", status: "ACTIVE", createdAt: new Date().toISOString() }];
    }
  }
};
