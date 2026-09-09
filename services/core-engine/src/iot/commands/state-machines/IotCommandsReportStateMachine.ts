export type IotCommandsReportState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IotCommandsReportStateMachine {
  private allowedTransitions: Record<IotCommandsReportState, IotCommandsReportState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IotCommandsReportState, to: IotCommandsReportState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IotCommandsReportState, to: IotCommandsReportState): IotCommandsReportState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IotCommandsReport: " + from + " -> " + to);
    }
    return to;
  }
}
