export const HrSkillMatrixTypeDefs = `
  type HrSkillMatrix {
    id: ID!
    tenantId: String!
    code: String!
    name: String!
    status: String!
    createdAt: String!
  }
  extend type Query {
    getHrSkillMatrix(id: ID!): HrSkillMatrix
    listHrSkillMatrixs(tenantId: String!): [HrSkillMatrix!]!
  }
`;

export const HrSkillMatrixResolvers = {
  Query: {
    getHrSkillMatrix: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C-01", name: "HrSkillMatrix", status: "ACTIVE", createdAt: new Date().toISOString() };
    },
    listHrSkillMatrixs: async (_: any, args: { tenantId: string }) => {
      return [{ id: "1", tenantId: args.tenantId, code: "C-01", name: "HrSkillMatrix", status: "ACTIVE", createdAt: new Date().toISOString() }];
    }
  }
};
