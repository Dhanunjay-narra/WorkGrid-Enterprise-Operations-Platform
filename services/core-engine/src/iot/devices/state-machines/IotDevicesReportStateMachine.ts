export type IotDevicesReportState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IotDevicesReportStateMachine {
  private allowedTransitions: Record<IotDevicesReportState, IotDevicesReportState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IotDevicesReportState, to: IotDevicesReportState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IotDevicesReportState, to: IotDevicesReportState): IotDevicesReportState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IotDevicesReport: " + from + " -> " + to);
    }
    return to;
  }
}
