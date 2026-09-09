export type IotFleetReportState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IotFleetReportStateMachine {
  private allowedTransitions: Record<IotFleetReportState, IotFleetReportState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IotFleetReportState, to: IotFleetReportState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IotFleetReportState, to: IotFleetReportState): IotFleetReportState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IotFleetReport: " + from + " -> " + to);
    }
    return to;
  }
}
