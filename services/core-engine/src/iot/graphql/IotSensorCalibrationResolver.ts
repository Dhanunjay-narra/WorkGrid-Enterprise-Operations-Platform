export const IotSensorCalibrationTypeDefs = `
  type IotSensorCalibration {
    id: ID!
    tenantId: String!
    code: String!
    name: String!
    status: String!
    createdAt: String!
  }
  extend type Query {
    getIotSensorCalibration(id: ID!): IotSensorCalibration
    listIotSensorCalibrations(tenantId: String!): [IotSensorCalibration!]!
  }
`;

export const IotSensorCalibrationResolvers = {
  Query: {
    getIotSensorCalibration: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C-01", name: "IotSensorCalibration", status: "ACTIVE", createdAt: new Date().toISOString() };
    },
    listIotSensorCalibrations: async (_: any, args: { tenantId: string }) => {
      return [{ id: "1", tenantId: args.tenantId, code: "C-01", name: "IotSensorCalibration", status: "ACTIVE", createdAt: new Date().toISOString() }];
    }
  }
};
