export type ProjectEpicsMappingState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ProjectEpicsMappingStateMachine {
  private allowedTransitions: Record<ProjectEpicsMappingState, ProjectEpicsMappingState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ProjectEpicsMappingState, to: ProjectEpicsMappingState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ProjectEpicsMappingState, to: ProjectEpicsMappingState): ProjectEpicsMappingState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ProjectEpicsMapping: " + from + " -> " + to);
    }
    return to;
  }
}
