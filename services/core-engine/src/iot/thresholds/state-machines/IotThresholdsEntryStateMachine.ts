export type IotThresholdsEntryState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IotThresholdsEntryStateMachine {
  private allowedTransitions: Record<IotThresholdsEntryState, IotThresholdsEntryState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IotThresholdsEntryState, to: IotThresholdsEntryState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IotThresholdsEntryState, to: IotThresholdsEntryState): IotThresholdsEntryState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IotThresholdsEntry: " + from + " -> " + to);
    }
    return to;
  }
}
