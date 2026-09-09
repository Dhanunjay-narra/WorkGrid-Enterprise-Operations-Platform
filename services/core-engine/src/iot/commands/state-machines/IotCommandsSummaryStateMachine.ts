export type IotCommandsSummaryState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IotCommandsSummaryStateMachine {
  private allowedTransitions: Record<IotCommandsSummaryState, IotCommandsSummaryState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IotCommandsSummaryState, to: IotCommandsSummaryState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IotCommandsSummaryState, to: IotCommandsSummaryState): IotCommandsSummaryState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IotCommandsSummary: " + from + " -> " + to);
    }
    return to;
  }
}
