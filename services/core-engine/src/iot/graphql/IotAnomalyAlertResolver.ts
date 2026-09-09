export const IotAnomalyAlertTypeDefs = `
  type IotAnomalyAlert {
    id: ID!
    tenantId: String!
    code: String!
    name: String!
    status: String!
    createdAt: String!
  }
  extend type Query {
    getIotAnomalyAlert(id: ID!): IotAnomalyAlert
    listIotAnomalyAlerts(tenantId: String!): [IotAnomalyAlert!]!
  }
`;

export const IotAnomalyAlertResolvers = {
  Query: {
    getIotAnomalyAlert: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C-01", name: "IotAnomalyAlert", status: "ACTIVE", createdAt: new Date().toISOString() };
    },
    listIotAnomalyAlerts: async (_: any, args: { tenantId: string }) => {
      return [{ id: "1", tenantId: args.tenantId, code: "C-01", name: "IotAnomalyAlert", status: "ACTIVE", createdAt: new Date().toISOString() }];
    }
  }
};
