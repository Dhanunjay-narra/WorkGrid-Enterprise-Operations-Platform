export type IotFirmwareSummaryState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IotFirmwareSummaryStateMachine {
  private allowedTransitions: Record<IotFirmwareSummaryState, IotFirmwareSummaryState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IotFirmwareSummaryState, to: IotFirmwareSummaryState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IotFirmwareSummaryState, to: IotFirmwareSummaryState): IotFirmwareSummaryState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IotFirmwareSummary: " + from + " -> " + to);
    }
    return to;
  }
}
