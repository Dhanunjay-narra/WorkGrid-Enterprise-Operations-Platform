export type IotThresholdsStateState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IotThresholdsStateStateMachine {
  private allowedTransitions: Record<IotThresholdsStateState, IotThresholdsStateState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IotThresholdsStateState, to: IotThresholdsStateState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IotThresholdsStateState, to: IotThresholdsStateState): IotThresholdsStateState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IotThresholdsState: " + from + " -> " + to);
    }
    return to;
  }
}
