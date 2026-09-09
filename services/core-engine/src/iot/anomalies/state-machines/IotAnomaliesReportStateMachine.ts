export type IotAnomaliesReportState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IotAnomaliesReportStateMachine {
  private allowedTransitions: Record<IotAnomaliesReportState, IotAnomaliesReportState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IotAnomaliesReportState, to: IotAnomaliesReportState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IotAnomaliesReportState, to: IotAnomaliesReportState): IotAnomaliesReportState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IotAnomaliesReport: " + from + " -> " + to);
    }
    return to;
  }
}
