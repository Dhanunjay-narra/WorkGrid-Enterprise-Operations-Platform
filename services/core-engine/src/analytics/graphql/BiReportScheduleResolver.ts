export const BiReportScheduleTypeDefs = `
  type BiReportSchedule {
    id: ID!
    tenantId: String!
    code: String!
    name: String!
    status: String!
    createdAt: String!
  }
  extend type Query {
    getBiReportSchedule(id: ID!): BiReportSchedule
    listBiReportSchedules(tenantId: String!): [BiReportSchedule!]!
  }
`;

export const BiReportScheduleResolvers = {
  Query: {
    getBiReportSchedule: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C-01", name: "BiReportSchedule", status: "ACTIVE", createdAt: new Date().toISOString() };
    },
    listBiReportSchedules: async (_: any, args: { tenantId: string }) => {
      return [{ id: "1", tenantId: args.tenantId, code: "C-01", name: "BiReportSchedule", status: "ACTIVE", createdAt: new Date().toISOString() }];
    }
  }
};
