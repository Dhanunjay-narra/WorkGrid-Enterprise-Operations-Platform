export type IotThresholdsEventState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IotThresholdsEventStateMachine {
  private allowedTransitions: Record<IotThresholdsEventState, IotThresholdsEventState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IotThresholdsEventState, to: IotThresholdsEventState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IotThresholdsEventState, to: IotThresholdsEventState): IotThresholdsEventState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IotThresholdsEvent: " + from + " -> " + to);
    }
    return to;
  }
}
