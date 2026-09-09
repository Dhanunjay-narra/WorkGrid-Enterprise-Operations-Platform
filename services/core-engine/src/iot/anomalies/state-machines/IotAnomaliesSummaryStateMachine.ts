export type IotAnomaliesSummaryState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IotAnomaliesSummaryStateMachine {
  private allowedTransitions: Record<IotAnomaliesSummaryState, IotAnomaliesSummaryState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IotAnomaliesSummaryState, to: IotAnomaliesSummaryState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IotAnomaliesSummaryState, to: IotAnomaliesSummaryState): IotAnomaliesSummaryState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IotAnomaliesSummary: " + from + " -> " + to);
    }
    return to;
  }
}
