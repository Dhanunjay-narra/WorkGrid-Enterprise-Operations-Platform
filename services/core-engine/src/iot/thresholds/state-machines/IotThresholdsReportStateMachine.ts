export type IotThresholdsReportState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IotThresholdsReportStateMachine {
  private allowedTransitions: Record<IotThresholdsReportState, IotThresholdsReportState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IotThresholdsReportState, to: IotThresholdsReportState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IotThresholdsReportState, to: IotThresholdsReportState): IotThresholdsReportState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IotThresholdsReport: " + from + " -> " + to);
    }
    return to;
  }
}
