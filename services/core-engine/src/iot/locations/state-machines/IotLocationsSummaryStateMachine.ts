export type IotLocationsSummaryState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IotLocationsSummaryStateMachine {
  private allowedTransitions: Record<IotLocationsSummaryState, IotLocationsSummaryState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IotLocationsSummaryState, to: IotLocationsSummaryState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IotLocationsSummaryState, to: IotLocationsSummaryState): IotLocationsSummaryState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IotLocationsSummary: " + from + " -> " + to);
    }
    return to;
  }
}
