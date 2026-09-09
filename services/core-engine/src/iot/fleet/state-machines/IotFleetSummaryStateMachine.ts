export type IotFleetSummaryState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IotFleetSummaryStateMachine {
  private allowedTransitions: Record<IotFleetSummaryState, IotFleetSummaryState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IotFleetSummaryState, to: IotFleetSummaryState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IotFleetSummaryState, to: IotFleetSummaryState): IotFleetSummaryState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IotFleetSummary: " + from + " -> " + to);
    }
    return to;
  }
}
