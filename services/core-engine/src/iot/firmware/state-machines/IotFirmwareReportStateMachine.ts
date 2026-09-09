export type IotFirmwareReportState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IotFirmwareReportStateMachine {
  private allowedTransitions: Record<IotFirmwareReportState, IotFirmwareReportState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IotFirmwareReportState, to: IotFirmwareReportState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IotFirmwareReportState, to: IotFirmwareReportState): IotFirmwareReportState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IotFirmwareReport: " + from + " -> " + to);
    }
    return to;
  }
}
