export type ProjectEpicsTaskState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ProjectEpicsTaskStateMachine {
  private allowedTransitions: Record<ProjectEpicsTaskState, ProjectEpicsTaskState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ProjectEpicsTaskState, to: ProjectEpicsTaskState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ProjectEpicsTaskState, to: ProjectEpicsTaskState): ProjectEpicsTaskState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ProjectEpicsTask: " + from + " -> " + to);
    }
    return to;
  }
}
