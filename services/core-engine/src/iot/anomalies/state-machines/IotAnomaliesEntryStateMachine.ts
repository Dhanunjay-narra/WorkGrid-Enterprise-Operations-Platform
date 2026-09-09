export type IotAnomaliesEntryState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IotAnomaliesEntryStateMachine {
  private allowedTransitions: Record<IotAnomaliesEntryState, IotAnomaliesEntryState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IotAnomaliesEntryState, to: IotAnomaliesEntryState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IotAnomaliesEntryState, to: IotAnomaliesEntryState): IotAnomaliesEntryState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IotAnomaliesEntry: " + from + " -> " + to);
    }
    return to;
  }
}
