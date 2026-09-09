export type IotAnomaliesItemState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IotAnomaliesItemStateMachine {
  private allowedTransitions: Record<IotAnomaliesItemState, IotAnomaliesItemState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IotAnomaliesItemState, to: IotAnomaliesItemState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IotAnomaliesItemState, to: IotAnomaliesItemState): IotAnomaliesItemState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IotAnomaliesItem: " + from + " -> " + to);
    }
    return to;
  }
}
